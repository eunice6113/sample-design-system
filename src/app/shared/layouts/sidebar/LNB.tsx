import * as React from "react";
import { PanelMenu } from 'primereact/panelmenu';
import './lnb.css';
import { useLocation } from "react-router-dom";

interface IProps {
    open: boolean;
    children?: React.ReactNode;
}

const LNB: React.FC<IProps> = ({open, children}) => {
    const location = useLocation();
    const pathName = location.pathname;
    const curLocation = location.pathname.split('/')[1];
    console.log('curLocation', curLocation);

    const getClsName = ( url:string ) => url === pathName ? 'selected' : '';

    //메뉴 필터링
    const getIsAdmin = () => {
        return true;
    }

    const items = [
        // {
        //     label:'UI',
        //     visible: true,
        //     expanded: true,
        //     items:[
                {
                    label:'CSS Guide',
                    url: '/ui/guide',
                    className: getClsName('/ui/guide')
                },
                {
                    label:'Button',
                    url: '/ui/button',
                    className: getClsName('/ui/button')
                },
                {
                    label:'Input',
                    url: '/ui/input',
                    className: getClsName('/ui/input')
                },
                {
                    label:'Select',
                    url: '/ui/select',
                    className: getClsName('/ui/select')
                },
                {
                    label:'Radio',
                    url: '/ui/radio',
                    className: getClsName('/ui/radio')
                },
                {
                    label:'Checkbox',
                    url: '/ui/check',
                    className: getClsName('/ui/check')
                },
                {
                    label:'DatePicker',
                    url: '/ui/datepicker',
                    className: getClsName('/ui/datepicker')
                },
                {
                    label:'Popup',
                    url: '/ui/popup',
                    className: getClsName('/ui/popup')
                },
                {
                    label:'Table List',
                    url: '/ui/table-list',
                    className: getClsName('/ui/table-list')
                },
                {
                    label:'Table View',
                    url: '/ui/table-view/0',
                    className: getClsName('/ui/table-view')
                },
                {
                    label:'No Data',
                    url: '/ui/nodata',
                    className: getClsName('/ui/nodata')
                },
                {
                    label:'Excel Import/Export',
                    url: '/ui/excel',
                    className: getClsName('/ui/excel')
                },
                {
                    label:'Chart',
                    url: '/ui/chart',
                    className: getClsName('/ui/chart')
                },
                {
                    label:'Upload',
                    url: '/ui/upload',
                    className: getClsName('/ui/upload')
                },
        //     ]
        // },
    ];

    React.useEffect(() => {
        console.log('open', open)
    }, [open])
    return(
    <>
    {
        /*
        multiple 추가시 여러 탭 오픈 가능
        */
        <PanelMenu className={`cldLnb navi ${open ? 'open':'close'}`} model={items}/>
    }
    </>
    )
}
export default LNB;





