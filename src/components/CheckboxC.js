import React from 'react'
import {
    FormGroup,
    Input,
    Label,
    Form
} from 'reactstrap';

export default function CheckboxC() {
    return (
        <div>
            <Form>
                <FormGroup
                    check
                    inline
                >
                    <Input type="checkbox" />
                    <Label check> Héroe </Label>
                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input type="checkbox" />
                    <Label check>Amigable</Label>
                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input type="checkbox" />
                    <Label check>Conversador</Label>
                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input type="checkbox" />
                    <Label check>Respetuoso</Label>
                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input type="checkbox" />
                    <Label check>No me agrada</Label>
                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input type="checkbox" />
                    <Label check>Grosero</Label>
                </FormGroup>
            </Form>
        </div>
    )
}
