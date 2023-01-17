import * as React from 'react';
import './page-title.css'

interface IProps {
    title: string;
}

const PageTitle: React.FC<IProps> = ({title}) => {
    return(
    <div className='pageTitleContainer'>
        <h1>{title}</h1>
    </div>
    )
}
export default PageTitle

