import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import MainHeader from './header/MainHeader';
import MainEdit from './main/MainEdit';
import MainBottom from './bottom/MainBottom';
import './pageEdit.scss'
function PageEdit(props: any) {


    return (<div className='pageEdit'>
        <MainHeader></MainHeader>
        <MainEdit></MainEdit>
        <MainBottom></MainBottom>
    </div>)
}

export default PageEdit;
