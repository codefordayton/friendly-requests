import React, {Component} from 'react';
import { Button, Form, Header, Input, Segment, TextArea } from 'semantic-ui-react'

class RequestForm extends Component {
    render() {
        return (
            <div>
              <Header as='h1'>Friendly Requests Template</Header>
              <Segment>
                <p>
                  Friendly Requests helps people make public record requests in the State of Ohio.
                </p>
                <ol>
                  <li>Fill out the form below</li>
                  <li>Click the "Generate Request" button</li>
                  <li>A Microsoft Word document for your request will be created using the information provided</li>
                </ol>
              </Segment>
              <Form action="http://127.0.0.1:5000/generate" method="POST">
                 <Form.Field required>
                  <label>Agency/Department Contact Name</label>
                  <Input name="department_contact_name" fluid placeholder= "Mr./Ms. John/Jane Smith" />
                 </Form.Field>
                 <Form.Field required>
                  <label>Agency/Department Name</label>
                  <Input name="department_name" fluid placeholder= "Department of Records" />
                </Form.Field>
                <Form.Field required>
                  <label>Agency/Department Address 1</label>
                  <Input name="department_address1" fluid placeholder= "123 Main St."/>
                </Form.Field>
                <Form.Field required>
                  <label>Agency/Department Address 2</label>
                  <Input name="department_address2" fluid placeholder= "Columbus, OH 45000"/>
                </Form.Field>
                <Form.Field required>
                  <label>Requester Name</label>
                  <Input name="requester_name" fluid placeholder= "Mr./Ms. Jim/Julie Brown"/>
                </Form.Field>
                <Form.Field required>
                  <label>Requester Contact Information</label>
                  <Input name="phone_number" fluid placeholder="e.g. phone number and/or email address"/>
                </Form.Field>
                <Form.Field>
                  <label>Date Needed</label>
                  <Input name="date_needed" fluid placeholder="(optional)"/>
                </Form.Field>
                <Form.Field required>
                  <label>Request Description</label>
                  <TextArea autoHeight name="request_description" fluid placeholder="Description of the request..."/>
                </Form.Field>
                <Form.Field>
                  <label>Request Goals/Justification</label>
                  <TextArea autoHeight name="request_goals" fluid placeholder="Provide a goal or justification for the request... (optional)"/>
                </Form.Field>
                <Form.Field required>
                  <label>Not to Exceed Cost</label>
                  <Input label="$" name="nte_cost" fluid />
                </Form.Field>
                <Form.Checkbox inline label='Request copies of documents' />
                <Form.Checkbox inline label='Request fee waiver' />
                <Form.Checkbox inline label='I am a member of the media' />
                <Button type="submit">Generate Request</Button>
              </Form>
            </div>
        );
    }
}

export default RequestForm
