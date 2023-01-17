import { Button } from "primereact";
import * as React from "react";
import { BasePage } from "../../shared/components/base/BasePage";
import ClipboardCopy from "../../shared/components/clipboard-copy/ClipboardCopy";
import './ui-guide.css';

const ButtonGuide: React.FC = () => {

    const handleClick = () => {
        alert('Button Click!')
    }
    return(
    <BasePage>

        <h3>primary</h3>
        <Button label='조회' onClick={handleClick} />
        <ClipboardCopy rows={4} 
        copyText={`const handleClick = () => {
    alert('Button Click!')
}
<Button label='조회' onClick={handleClick} />`} />

        <Button label='조회' disabled />
        <ClipboardCopy copyText={`<Button label='조회' disabled />`} />

        <Button label='조회' icon='pi pi-refresh' onClick={handleClick} />
        <ClipboardCopy rows={4} copyText={`const handleClick = () => {
    alert('Button Click!')
}
<Button label='조회' icon='pi pi-refresh' onClick={handleClick} />`} />

        <h3>Secondary</h3>
        <Button className='secondary' label='조회' onClick={handleClick} />
        <ClipboardCopy rows={4} copyText={`const handleClick = () => {
    alert('Button Click!')
}
<Button className='secondary' label='조회' onClick={handleClick} />`} />

        <Button className='secondary' label='조회' disabled />
        <ClipboardCopy copyText={`<Button className='secondary' label='조회' disabled />`} />

        <Button className='secondary' label='조회' onClick={handleClick} icon='pi pi-refresh' />
        <ClipboardCopy rows={4} copyText={`const handleClick = () => {
    alert('Button Click!')
}
<Button className='secondary' label='조회' onClick={handleClick} icon='pi pi-refresh' />`} />

        <h3>Outline</h3>
        <Button className='outline' label='조회' onClick={handleClick} />
        <ClipboardCopy rows={4} copyText={`const handleClick = () => {
    alert('Button Click!')
}
<Button className='outline' label='조회' onClick={handleClick} />`} />

        <Button className='outline' label='조회' onClick={handleClick} disabled />
        <ClipboardCopy copyText={`<Button className='outline' label='조회' disabled />`} />

        <Button className='outline' label='조회' onClick={handleClick} icon='pi pi-refresh' />

        <h3>size</h3>
        <Button className='xxl' onClick={handleClick}>xxl 사이즈</Button>
        <br/>
        <br/>
        <Button className='xl' onClick={handleClick}>xl 사이즈</Button>
        <br/>
        <br/>
        <Button className='lg' onClick={handleClick}>lg 사이즈</Button>
        <br/>
        <br/>
        <Button className='md' onClick={handleClick}>md 사이즈</Button>
        <br/>
        <br/>
        <Button className='sm' onClick={handleClick}>sm 사이즈</Button>

    </BasePage>)
}
export default ButtonGuide;