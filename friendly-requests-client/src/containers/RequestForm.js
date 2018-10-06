import React, {Component} from 'react';
import { Button, Checkbox, Form, Input, TextArea } from 'semantic-ui-react'

class RequestForm extends Component {
    render() {
        return (
            <div>
              <Form action="http://127.0.0.1:5000/generate" method="POST">
                 <Form.Field>
                  <label>Agency/Department Contact Name</label>
                  <Input name="department_contact_name" fluid placeholder= "Mr./Ms. John/Jane Smith" />
                 </Form.Field>
                 <Form.Field>
                  <label>Agency/Department Name</label>
                  <Input name="department_name" fluid placeholder= "Department of Records" />
                </Form.Field>
                <Form.Field>
                  <label>Agency/Department Address 1</label>
                  <Input name="department_address1" fluid placeholder= "123 Main St."/>
                </Form.Field>
                <Form.Field>
                  <label>Agency/Department Address 2</label>
                  <Input name="department_address2" fluid placeholder= "Columbus, OH 45000"/>
                </Form.Field>
                <Form.Field>
                  <label>Requester Name</label>
                  <Input name="requester_name" fluid placeholder= "Mr./Ms. Jim/Julie Brown"/>
                </Form.Field>
                <Form.Field>
                  <label>Requester Phone Number</label>
                  <Input name="phone_number" fluid placeholder="123-456-7890"/>
                </Form.Field>
                <Form.Field>
                  <label>Date Needed</label>
                  <Input name="date_needed" fluid placeholder="MM/DD/YYYY"/>
                </Form.Field>
                <Form.Field>
                  <label>Request Description</label>
                  <TextArea autoHeight name="request_description" fluid placeholder="Description of the request..."/>
                </Form.Field>
                <Form.Field>
                  <label>Request Goals</label>
                  <TextArea autoHeight name="request_goals" fluid placeholder="Goals of the request..."/>
                </Form.Field>
                <Form.Field>
                  <label>Not to Exceed Cost</label>
                  <Input label="$" name="nte_cost" fluid />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='Request copies of documents' />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='Request fee waiver' />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I am a member of the media' />
                </Form.Field>
                <Button type="submit">Generate Request</Button>
              </Form>
            </div>
        );
    }
}

export default RequestForm
