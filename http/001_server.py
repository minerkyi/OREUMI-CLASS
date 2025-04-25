from http.server import (
    HTTPServer,
    BaseHTTPRequestHandler,
)  # 간단한 서버를 만들 수 있는 모듈
from urllib.parse import urlparse, parse_qs


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):  # get 요청 처리
        parsed_url = urlparse(self.path)  # URL 파싱
        query_params = parse_qs(parsed_url.query)  # 쿼리 파싱

        username = query_params.get("username", [None])[
            0
        ]  # username과 password 값을 가져옴. 값이 없는 경우 None이 기본값.
        password = query_params.get("password", [None])[0]

        if username and password:  # 2개 모두 존재하는 경우
            response = f"Username: {username}, Password: {password}"
        else:  # 그렇지 않은 경우에는 form
            response = """
            <form action="" method="get">
                <input type="text" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <input type="submit" value="Login">
            </form>
            """

        self.send_response(
            404
        )  # HTTP 상태코드 생성(200은 요청이 성공적으로 처리되었다는 것)
        self.send_header("Content-type", "text/html")  # 응답은 HTML로 송신
        # self.send_header(
        #     "Content-type", "application/json"
        # )  # json 형태로 송신하고 싶다면 아래 주석을 해제
        self.end_headers()  # 헤더 정보는 여기까지 마무리 하겠다는 것
        self.wfile.write(response.encode("utf-8"))  # 응답 메시지 작성


if __name__ == "__main__":
    server_address = ("", 8000)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f"Server running on port {server_address[1]}")
    httpd.serve_forever()

"""
FE로서 이 소스코드를 실행했을 때 관전 포인트

1. 서버를 실행했을 때 User의 입장
2. 개발자 입장에서 Front-end를 만들고 어디에다가 소스코드를 넣어야 하는지
3. form을 입력해서 서버에 요청을 보냈을 때 어떤 식으로 처리하는지

실행 순서
1. http://127.0.0.1:8000/ 로 접속했을 때 Form이 보입니다.
"""
