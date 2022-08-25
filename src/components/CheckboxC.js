import React from 'react'
import {
    FormGroup,
    Input,
    Form
} from 'reactstrap';

export default function CheckboxC({oneCommentClick, index}) {
    return (
        <div>
            <Form>
                <FormGroup
                    check
                    inline
                >
                    <Input value="Heroe" onChange={(e)=> oneCommentClick(index, e)} type="checkbox" /> Heroe
                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input value="Amigable" onChange={(e)=> oneCommentClick(index, e)}type="checkbox" /> Amigable
                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input value="Conversador" onChange={(e)=> oneCommentClick(index, e)}type="checkbox" /> Conversador

                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input value="Respetuoso" onChange={(e)=> oneCommentClick(index, e)} type="checkbox" /> Respetuoso

                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input value="No me agrada" onChange={(e)=> oneCommentClick(index, e)} type="checkbox" /> No me agrada
                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input value="Grosero" onChange={(e)=> oneCommentClick(index, e)} type="checkbox" /> Grosero

                </FormGroup>
            </Form>
        </div>
    )
}
