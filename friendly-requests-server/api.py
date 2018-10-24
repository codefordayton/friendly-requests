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
import os
import os.path

from docxtpl import DocxTemplate
from environs import Env
from flask import Flask, send_file
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

env = Env()
ENV_DEBUG = env.bool("DEBUG", False)

parser = reqparse.RequestParser()
parser.add_argument('department_contact_name')
parser.add_argument('department_address1')
parser.add_argument('department_address2')
parser.add_argument('department_name')
parser.add_argument('copy_files', type=bool)
parser.add_argument('request_description')
parser.add_argument('nte_cost')
parser.add_argument('waive_fees', type=bool)
parser.add_argument('request_goals')
parser.add_argument('date_needed')
parser.add_argument('phone_number')
parser.add_argument('requester_name')


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
    app.run(debug=ENV_DEBUG, host='0.0.0.0')
