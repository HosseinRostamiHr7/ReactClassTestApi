import React from 'react';
import { useEffect, useReducer } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Cards from "./Cards";

/* const courses = [
    { id: 1, title: 'آموزش Angular در Net Core.', teacher: 'اردوخانی', time: '14:1:00', price: 60000, image: 'https://toplearn.com/img/course/400x286/ea145be4-2256-489c-92ac-effb5b9d420234260b37-8cb8-4494-8464-97e4148488e032.png' },
    { id: 2, title: 'آموزش React در Net Core.', teacher: 'خسروجردی', time: '14:1:00', price: 430000, image: 'https://toplearn.com/img/course/400x286/cfc70068-4c92-43bf-a7f3-d41d0b7ee904sweetalert(1).png' },
    { id: 3, title: 'آموزش C# در Net Core.', teacher: 'مدائنی', time: '09:11:00', price: 500000, image: 'https://toplearn.com/img/course/400x286/bdd53542-f78c-41d2-a81b-cd9ded47cef1ea1886c0-848c-400c-bc1b-a1bd9cb91975mljavascript.png' },
    { id: 4, title: 'آموزش ASP در Net Core.', teacher: 'قربانی', time: '12:1:00', price: 601000, image: 'https://toplearn.com/img/course/400x286/img-course-%D8%AF%D9%88-%D8%B4%D9%86%D8%A8%D9%87-%DB%B2%DB%B5-%D9%81%D8%B1%D9%88%D8%B1%D8%AF%DB%8C%D9%86-%DB%B1%DB%B3%DB%B9%DB%B9-82836702-1292.jpg' },
    { id: 5, title: 'آموزش Laravel در Net Core.', teacher: 'معصومی', time: '14:1:00', price: 6320000, image: 'https://toplearn.com/img/course/400x286/793e0ddc-d6b1-48e1-b411-4e4877acb16d%D8%A2%D9%85%D9%80%D9%80%D9%88%D8%B2%D8%B4_%D8%B3%D8%A7%D8%AE%D8%AA_%D8%B5%D9%81%D8%B1_%D8%AA%D8%A7_%D8%B5%D8%AF_%D9%88%D8%A8_%D8%B3%D8%A7%DB%8C%D8%AA_%D8%A8%D8%A7_%D9%84%D8%A7%D8%B1%D8%A7%D9%88%D9%84.png' },
    { id: 6, title: 'آموزش PHP در Net Core.', teacher: 'اردوخانی', time: '10:1:00', price: 60000, image: 'https://toplearn.com/img/course/400x286/231599e1-6d33-4e53-a641-2e578df4b8a36%20(2)(1).png' }
];
const courseItem = courses.map((course =>
    <Cards key={course.id} title={course.title}
        teacher={course.teacher} time={course.time}
        price={course.price} image={course.image} />)); */

const initialState = { loading: false, data: null, error: null }


const reducer = (state, action) => {
    switch (action.type) {
        case "fetchDataStart":
            return {
                ...state,
                loading: true,
                data: null,
                error: null
            }
        case "fetchDataSuccess":
            return {
                ...state,
                loading: false,
                data: true,
                error: null

            }
        case "fetchDataFail":
            return {
                ...state,
                loading: false,
                data: false,
                error: true
            }
    }
};
const [state, dispatch] = useReducer(reducer, initialState);

useEffect(() => {
    dispatch({ type: "fetchDataStart" })
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(Response => Response.json())
        .then(result => {
            dispatch({ type: "fetchDataSuccess", payload: result })
        })
        .catch(error => {
            dispatch({ type: "fetchDataSuccess" })
        })
}, [])

const Main = () => {
    return (
        <div>
            <>
                <Container >
                    <Row className="justify-content-md-center">
                        {/* {state.loading ? <Spinner /> : ""} */}
                        <p>{state.loading ? 'Loading...' : ''}</p>
                        {state.data ? state.data.map((todo, index) => {
                            <Cards title={todo.title} id={todo.id} />
                        }) : "nothing"}

                    </Row>
                </Container>
            </>
        </div>
    );
};

export default Main;