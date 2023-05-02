import { Col, Container, Row, Button, Form, Table, Alert } from 'react-bootstrap';
import { useState } from 'react';
import dayjs from 'dayjs';

function AnswerForm(props) {

    const [date, setDate] = useState(props.objToEdit? props.objToEdit.date.format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'));  //string: dayjs object is created only on submit
    const [text, setText] = useState(props.objToEdit? props.objToEdit.text : '');
    const [respondent, setRespondent] = useState(props.objToEdit? props.objToEdit.respondent : '');
    const [score, setScore] = useState(props.objToEdit? props.objToEdit.score : 0);

    const [errorMsg, setErrorMsg] = useState('');

    function handleRespondent(event) {
        const v = event.target.value;
        setRespondent(v);
    }

    const handleScore = (ev) => {
        const v = ev.target.value;
        setScore(v);
    }

    function handleSubmit(event) {
        event.preventDefault();
        //console.log('premuto submit');

        // Form validation
        if (date === '')
            setErrorMsg('Data non valida');
        else if (isNaN(parseInt(score)))
            setErrorMsg('Score non valido');
        else if (parseInt(score)<0) {
            setErrorMsg('Score negativo non valido');
        }
        else {
            const e = {
                text: text,
                respondent: respondent,
                score: parseInt(score),
                date: dayjs(date)
            }
            //console.log(e);

            if (props.objToEdit) {  // decide if this is an edit or an add
                e.id = props.objToEdit.id;
                props.editAnswer(e);
            } else
                props.addAnswer(e);
        }
    }

    return (
        <>
        {errorMsg? <Alert variant='danger' onClose={()=>setErrorMsg('')} dismissible>{errorMsg}</Alert> : false }
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" value={date} onChange={ev => setDate(ev.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" name="text" value={text} onChange={ev => setText(ev.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Respondent</Form.Label>
                <Form.Control type="text" name="respondent" value={respondent} onChange={handleRespondent} />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Score</Form.Label>
                <Form.Control type="number" name="score" value={score} onChange={handleScore} />
            </Form.Group>

            <Button type='submit' variant="primary">{props.objToEdit? 'Save' : 'Add'}</Button> 
            <Button className='mx-2' variant='danger' onClick={props.closeForm}>Cancel</Button>
        </Form>
        </>
    );

}

export default AnswerForm;




export default AnswerForm;