import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { genericTypeAnnotation } from '@babel/types';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profiles: [{
            Nom: 'Jones',
            Prenom: 'Jon',
            Ddn: '19 juillet 1987',
            
            background: "grey",
            
          },
          {
            Nom: 'Demetrious',
            Prenom: 'Johnson',
            Ddn: '13 août 1986',
            
            background: "pink",
           
          },
          {
            Nom: 'Kamaru',
            Prenom: 'Usman',
            Ddn: '11 mai 1987',
            
            background: "yellow",
            
          }
        ],
        idUtilisateur: 0,
        button: true
    };
  }

  handleClick(i) {
    this.setState(
        {
          idUtilisateur: i
        }
    );
  }

  changecolor(i){
    
      this.setState(
        {
        background: this.state.profiles[i].background
        }
      );
    
  }

  render() {
    return (
      <div className="profile">
        <body>  
        <div className="change">
            <button onClick={() => this.handleClick(0)}>{this.state.profiles[0].Nom}</button>
            <button onClick={() => this.handleClick(1)}>{this.state.profiles[1].Nom}</button>
            <button onClick={() => this.handleClick(2)}>{this.state.profiles[2].Nom}</button>
        </div>
        
        <fieldset className="caract" style={{background : this.state.background}}>
            
            <article>
                
                <div className="Nom">
                    <p>{this.state.profiles[this.state.idUtilisateur].Nom}</p>
                </div>
                <div className="Prenom">
                    <p>{this.state.profiles[this.state.idUtilisateur].Prenom}</p>
                </div>
                <div className="Ddn">
                    <p>{this.state.profiles[this.state.idUtilisateur].Ddn}</p>
                </div>
                <div>
                   <button className="style" onClick={()=> this.changecolor(this.state.idUtilisateur)}>Changer style</button>
                   </div>
            </article>
        </fieldset>
        <fieldset className="caract" style={{background : this.state.background}}>
            <Commentaire
                comment={this.state.profiles[this.state.idUtilisateur].post}
            />
        </fieldset>
        
        
        </body>
      </div>
    );
  }
}


class Commentaire extends React.Component{
  render() {
      return(
          <div>
              <article>
                  <p>{this.props.comment}</p>
                  <p>L'UFC est une organisation américaine d'arts martiaux mixtes, actuellement reconnue comme la plus importante ligue mondiale de ce sport de combat</p>
                  <button>C'est super !</button>

                  
              </article>
          </div>
      );
  }
}



ReactDOM.render(
    <Profile/>,
    document.getElementById('root')
  );
