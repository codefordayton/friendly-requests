# friendly-requests

A way to support folks making public requests in the state of Ohio

Starting point:
A web accessible tool with inputs and links to help create a public records request.

## SERVER

The server is written in Python using the Flask framework.

1. Set up a virtual environment with `virtualenv env -p python3`
2. Install prereqs with `pip install -r requirements.txt`
3. Run with `python api.py`
4. POST request info to get a .docx 

Example command-line use:
curl -d '{"department_name":"Department of Things"}' -H "Content-Type: application/json" -X POST http://localhost:5000/generate > downloaded.docx

Then open downloaded.docx.

## CLIENT

The client app is written in React. The full README is at [it's README.md](friendly-requests-client/README.md).
