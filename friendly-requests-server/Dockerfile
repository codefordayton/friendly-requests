#
# friendly-requests-server Dockerfile
#

FROM jfloff/alpine-python:3.4-slim
MAINTAINER Code for Dayton Developers <https://github.com/codefordayton/friendly-requests>

WORKDIR /app
ADD . /app

RUN apk update && \
    apk add build-base py-lxml libxml2-dev libxslt-dev

RUN pip install -r requirements.txt

ENTRYPOINT ["python", "./api.py"]
