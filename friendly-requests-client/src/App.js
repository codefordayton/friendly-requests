import React, {Component} from 'react';
import './App.css';
import FixedMenuLayout from './containers/FixedMenuLayout';

import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class RequestForm extends Component {
    render() {
        return (
            <div>
                <form action="http://127.0.0.1:5000/generate" method="POST">
                    <legend>Friendly Form</legend>
                    <Input name="department_contact_name" hint="department_contact_name"/>
                    <Input name="department_address1" hint="department_address1"/>
                    <Input name="department_address2" hint="department_address2"/>
                    <Input name="department_name" hint="department_name"/>
                    <Input name="copy_files" hint="copy_files"/>
                    <Input name="request_description" hint="request_description"/>
                    <Input name="nte_cost" hint="nte_cost"/>
                    <Input name="waive_fees" hint="waive_fees"/>
                    <Input name="request_goals" hint="request_goals"/>
                    <Input name="date_needed" hint="date_needed"/>
                    <Input name="phone_number" hint="phone_number"/>
                    <Input name="requester_name" hint="requester_name"/>
                    <Button variant="raised">Submit</Button>
                </form>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <FixedMenuLayout />
    );
  }
}

export default App;
