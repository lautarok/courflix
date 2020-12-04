// IMAGES
import Logo from '../global/media/logo.png';

// COMPONENTS
import Vector from '../components/Vector';

// STYLES
import './css/Accounts.css';

function Accounts(props) {
    let accounts = props.accounts.map((data, index) => {
        return(
            <li key={ index }  style={ index === props.accounts.length - 1 && !props.admin ? ({ marginRight: 0 }) : (null) }>
                <a href={ props.admin ? ('/edit/' + index) : ('/view/' + index) }>
                    <div className={ props.admin ? ('image edit') : ('image') } style={{ backgroundImage: 'url(\'' + require('../global/media/users/' + data.image + '.png').default + '\')', backgroundSize: 'auto 100%' }}>
                        {
                            props.admin ? (
                                <div className='edit'>
                                    <Vector set='edit' />
                                </div>
                            ) : (
                                null
                            )
                        }
                    </div>
                    <div className='name'>
                        <span>{ data.name }</span>
                    </div>
                </a>
            </li>
        );
    });
    
    return(
        <div id='page' className='accounts'>
            <header>
                <a aria-label='Courflix' href='/'>
                    <img alt='Courflix logo' src={ Logo } />
                </a>
            </header>
            <div className='content'>
                <div className='container'>
                    <div className='title'>
                        {
                            props.admin ? (
                                <span>Administrar perfiles:</span>
                            ) : (
                                <span>&#191;Quién esta viendo ahora?</span>
                            )
                        }
                    </div>
                    <nav className='users'>
                        <ul>
                            {
                                accounts
                            }
                            {
                                props.admin && accounts.length < 5 ? (
                                    <li style={{ marginRight: 0 }}>
                                        <a href='/edit/new'>
                                            <div className={ props.admin ? ('image edit') : ('image') } style={{ backgroundImage: 'url(\'' + require('../global/media/users/new.png').default + '\')', backgroundSize: 'auto 100%' }}></div>
                                        </a>
                                    </li>
                                ) : null
                            }
                        </ul>
                    </nav>
                    <nav className='admin'>
                        {
                            props.admin ? (
                                <a href='/' className='primary'>
                                    <span>Listo</span>
                                </a>
                            ) : (
                                <a href='/ManageProfiles'>
                                    <span>Administrar perfiles</span>
                                </a>
                            )
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Accounts;