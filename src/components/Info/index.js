import React from 'react';
import './index.scss';

class Info extends React.Component{
 

    constructor(props){
        super(props);
    }

    render(){
        const tempParagraph = "Lorem ipsum dolor sit amet. A adipisci esse et corrupti reprehenderit non magnam doloribus qui dignissimos necessitatibus est quia ipsa aut modi labore. Id natus quisquam est similique veritatis et maxime odit id illum velit sit optio nulla. Sed vero voluptatem quo dolores accusamus hic voluptatibus cumque vel placeat voluptatem. Est libero rerum et mollitia molestiae non rerum vero est repudiandae eveniet non internos perspiciatis in dolorem corrupti! Rem maiores enim qui reiciendis odit ut veritatis voluptatibus et voluptas totam. Non eaque exercitationem est necessitatibus amet qui ipsa voluptatibus sit sapiente exercitationem. Est rerum laborum eum consectetur minima vel quia veritatis eum omnis molestias! Qui quae adipisci qui doloribus quae eum rerum nostrum non quaerat asperiores et obcaecati alias non fugiat galisum et ducimus fugit. Est exercitationem omnis in impedit architecto cum provident nostrum et similique omnis non fuga molestiae ut facere velit?"
        const podParagraph = "Lorem ipsum dolor sit amet. Qui dolorem sunt sit excepturi tempore qui veniam impedit est itaque velit est voluptate inventore? In debitis sint qui ipsa perspiciatis aut debitis recusandae sit numquam iure ut molestiae provident. Et eligendi accusamus non animi voluptatibus ut exercitationem illo eum eius dolorum. Vel cumque natus hic facere tempore sit soluta accusamus et dolorem consequuntur At eveniet dolorem est excepturi dolor id atque nihil. Aut fuga doloremque quo possimus sequi ex ducimus eveniet qui suscipit corporis eum quisquam facere aut dolores voluptas. Eum eligendi dolor sit enim autem sit expedita beatae. Et quaerat soluta ab nihil quaerat ea ratione earum et voluptates vero. Quo blanditiis minima aut laborum esse sit placeat dicta. Qui quibusdam dolore qui ducimus sunt sit voluptatibus ipsa sit laborum adipisci. Aut sequi maxime ut sint delectus eum eligendi sint sed quis illum ut fugiat doloremque.";

        return(
            <div class="container">
                <div class="titleheader">About Us</div>
                <div class="information">{tempParagraph}</div>
                <div class="titleheader">Our Pod</div>
                <div class="information">{podParagraph}</div>
            </div>
            
        );
    }
}

export default Info;

