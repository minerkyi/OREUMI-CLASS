// 기능 명세

// 1. **기본 동작**
    
//     입금, 출금, 계좌간 송금, 잔액조회(잔액은 최소한의 금액이 필요합니다.)
    
// 2. **이자 확인**
    
//     이자는 최대값에 제한이 있습니다. (예를 들어 이자가 1%이고, 최대값이 100만원일때, 120만원이 게좌에 있어도 여전히 100만원의 1%만 이자로 받습니다. 돈이 너무 많아서 이자가 무한대로 커지는 것을 막기 위함입니다.)
    
// 3. **즐겨찾기 계좌 관리하기**
    
//     내가 즐겨찾는 계좌 리스트를 볼 수 있고, 계좌를 추가할 수 있으며, 게좌를 제거할 수 있습니다.

// ## 이용 시나리오

// 1. 계좌를 하나 만듭니다. 이름은 tsAccount1 입니다.
// 2. 계좌를 하나 만듭니다. 이름은 tsAccount2 입니다.
// 3. tsAccount1계좌에 100만원을 입금합니다. tsAccount2 계좌로 50만원을 송금합니다.
// 4. 그러면 tsAccount1 계좌의 잔액은 50만원이고, 이자율이 1%라면 이자는 5천원입니다.
// 5. 만약 tsAccount1 계좌의 **이자율 한계 금액이 200만원일때, 최대 이자는** 1% 기준으로 2만원입니다. tsAccount1의 잔액이 300만원이더라도 **이자율 한계 금액이 200만원이므로, 최대이자는 여전히 2만원입니다.**


class BankAccount {
  private balance: number;
  private interestRate: number; // 이자율
  private interestCeiling: number; // 이자 계사나의 상한액
  private favoriteAccounts: BankAccount[] = []; // 즐겨찾기 계좌 배열
  private id: number; // 계좌를 식별하기 위한 값

  constructor(id: number, balance: number, interestRate: number, interestCeiling: number) {
    this.id = id;
    this.balance = balance;
    this.interestRate = interestRate;
    this.interestCeiling = interestCeiling;
  }

  // 즐겨찾기에 계좌 추가
  addAccountToFavorite(account: BankAccount): void {
    this.favoriteAccounts.push(account);
  }

  // 즐겨찾기 목록 조회
  getFavoriteAccounts(): BankAccount[] {
    return this.favoriteAccounts;
  }

  // 즐겨찾기에서 계좌제거
  removeFavoriteAccount(id: number): void {
    this.favoriteAccounts = this.favoriteAccounts.filter((account) => account.id !== id);
  }

  // 계좌간 송금 메서드
  transferMoney(amount: number, account: BankAccount): void {
    this.withdraw(amount);
    account.deposite(amount);
  }

  // 이자 계산 메서드. this.balance * this.interestRate
  getInterest(): number {
    // 잔액이 상한액보다 크다면 상한액까지만 이자를 계산
    if(this.balance > this.interestCeiling) {
      return this.interestCeiling * this.interestRate;
    }

    return this.balance * this.interestRate;
  }

  // 입금 메서드
  deposite(amount: number): void {
    this.balance += amount;
  }

  // 출금
  withdraw(amount: number): void {

    if(this.balance < amount) {
      console.error('잔액이 부족합니다!!!');
      return;
    }

    this.balance -= amount;
  }

  // 잔액 조회 / 계좌 조회 메서드
  getBalance(): number {
    return this.balance;
  }
}

const account1 = new BankAccount(0, 10000, 0.02, 1000000);
const account2 = new BankAccount(1, 10000, 0.02, 1000000);

account1.transferMoney(5000, account2);
account1.deposite(account1.getInterest());
account2.deposite(account2.getInterest());

console.log(account1.getBalance());
console.log(account2.getBalance());

account1.addAccountToFavorite(account1);
account1.addAccountToFavorite(account2);
console.log(account1.getFavoriteAccounts());
account1.removeFavoriteAccount(0);
console.log(account1.getFavoriteAccounts());