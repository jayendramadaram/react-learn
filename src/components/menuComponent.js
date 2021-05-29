import React, { Component } from "react";
import { Card,CardBody,CardImg,CardImgOverlay, CardText, CardTitle } from "reactstrap";
import './appy.css';

class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectdish : null
        };
        console.log("this is 1st part triffy");
    }

    componentDidMount() {
        console.log("this is fonnal");
    }

    onselect(dish) {
        this.setState({ selectdish : dish});
    }

    

    renderdish(dish) {
        if (dish!=null) {
            return (
                <div>
                <Card top>
                     <CardImg src={dish.image} alt={dish.name}/>
                     <CardBody><h3>{dish.name}</h3></CardBody>
                     <CardText className="p-4"><span>{dish.description}</span></CardText>
                </Card>
                </div>
            )
        }

        else {
            <div>not yet</div>
        };
        console.log("this is 2nd part triffy");
    }

    renderdet(dish) {

        if(dish!=null) {
        const run = dish.comments.map((dishe) => {
            return (
                <div className="ap">
                    <p>{ dishe.id }</p>
                    <p>{ dishe.rating }</p>
                    <p>{ dishe.comment }</p>
                    <p>{ dishe.author }</p>
                    <p>{ dishe.date }</p>
                </div>
            )
        }

        )
        return (
            <div>
            <Card top>
                 <CardBody><h3>{dish.name}</h3></CardBody>
                     <CardText className="p-4">{ run }</CardText>
            </Card> 
             
            </div>    
            )   
        }
        
        else {
            return <div></div>
        }
    };
    

    



    render() {

        const menu =this.props.dishes.map((dish) =>{
            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick = {() => this.onselect(dish)}>
                            <CardImg width="100%"  src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return ( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1 mt-5 mb-5">
                    {this.renderdish(this.state.selectdish)}
                    </div>
                    <div className="col-12 col-md-5 m-1 mt-5 mb-5 dubs">
                    {this.renderdet(this.state.selectdish)}
                    </div>
                </div>

            </div>
        );
    };
}

export default Menu;
