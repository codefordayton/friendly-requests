# friendly-requests-server

## Table of Contents

- [Docker Usage](#docker-usage)
  - [Build the Docker Image](#build-the-docker-image)
  - [Run the Docker Image](#run-the-docker-image)

## Docker Usage

If you do not have Docker installed on your computer, follow the instructions here: [https://docs.docker.com/engine/installation/](https://docs.docker.com/engine/installation/)

### Build the Docker Image

From the `friendly-requests-server` directory:

```shell
docker build -t codefordayton/friendly-requests-server .
```

If the build succeeds, you should see output similar to the following:
```
Successfully built 8214ed5bee38
Successfully tagged codefordayton/friendly-requests-server:latest
```

### Run the Docker Image

To start the image in a container, run the following command
```shell
docker run -d --rm -p 5000:5000 codefordayton/friendly-requests-server
```

The `-d` flag starts the container in the background (detached mode).

The `--rm` flag automatically cleans up and removes the container when it exits.

The `-p` flag specificies the ports to use. In this example, port 5000 on the host (your computer) is mapped to port 80 in the Docker container.

If the container started successfully, you should see a long string of digits and letters in your console, similar to:
```shell
785e59eb07f5e3155784761c17f12374f27e8dffd9f741518d17dcfcc2cace4c
```

To test the server, run:
```shell
curl -d '{"department_name":"Department of Things"}' -H "Content-Type: application/json" -X POST http://localhost:5000/generate > downloaded.docx
```

This will download a Microsoft Word document (.docx extension), which you should be able to open and edit.

### TODO

Update the Dockerfile to generate a production-ready Docker image.
