"""
Server to generate .docx based on a template and submitted data.

1. Install prereqs with `pip install -r requirements.txt`
2. Run with `python api.py`
3. POST request info to get a .docx

Example command-line use:

curl -d '{"department_name":"Department of Things"}' -H "Content-Type: application/json" -X POST http://localhost:5000/generate > downloaded.docx

Then open downloaded.docx.
"""

import io
import os.path

from docxtpl import DocxTemplate
from flask import Flask, make_response, send_file
from flask_restful import Api, Resource, abort, reqparse

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('department_name')


class PrintReadyDocument(Resource):
    """Generates a .docx populated with values from the POST arguments"""

    def post(self):
        args = parser.parse_args()

        # Generate the document, which includes our `args`, templated Jinja-style
        template_filename = os.path.join(app.root_path,
                                         'templates/request_template.docx')
        doc = DocxTemplate(template_filename)
        doc.render(args)

        # Save the document to a byte stream
        file_stream = io.BytesIO()
        doc.save(file_stream)
        file_stream.seek(0)

        return send_file(file_stream,
                         as_attachment=True,
                         attachment_filename='friendly_request.docx')


api.add_resource(PrintReadyDocument, '/generate')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
