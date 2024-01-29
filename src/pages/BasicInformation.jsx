import { Row, Col, Container} from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/basic-information.css";
import { RiBook2Line, RiSailboatFill, RiFileList2Line } from 'react-icons/ri';

const BasicInformation = () => {
    return(
        <Container className="info-container">
            <Row >
                <Col>
                    <Link to="/kako-unajmiti-plovilo">  
                        <div className="outer">                         
                            <div class="div"> <RiSailboatFill size={100} color="#000d6b"/> </div>
                            <div class="div">
                              <p className="menu-text" > KAKO UNAJMITI PLOVILO </p>
                            </div>
                        </div>
                    </Link>  
                </Col>
                
                <Col>
                    <Link to="/vrste-najma">
                      <div className="outer">                         
                            <div class="div"  > <RiFileList2Line size={100} color="#d4af37" />  </div>
                            <div class="div">
                                <p className="menu-text"> VRSTE NAJMA </p>
                            </div>
                        </div>
                    </Link> 
                </Col>
                    
                <Col>       
                    <Link to="/zakoni-plovidbe-u-hr">
                       <div className="outer">                         
                            <div class="div"> <RiBook2Line size={100} color="#000d6b" /> </div>
                            <div class="div">
                                <p className="menu-text"> ZAKONI PLOVIDBE U HR </p>
                            </div>
                        </div>
                    </Link> 
                </Col>
            </Row>
        </Container>
    );
}

export default BasicInformation;