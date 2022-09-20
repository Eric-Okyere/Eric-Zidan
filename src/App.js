import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col, Container } from "react-bootstrap";
import NoteMap from "./component/NoteMap"
import './App.css';
import NoteForm from "./component/NoteForm.jsx";
import NavB from "./component/NavB"


function App() {
	

	return (
		<div className="main">
		<NavB />
			<Container>
			
				<Row>
					<Col className="col1" md={2}>
				<NoteForm />
					</Col>
          <Col className="col2" >
          <NoteMap />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;