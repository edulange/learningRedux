import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserActionTypes from '../../redux/user/action-types'

import { loginUser, logoutUser } from '../../redux/user/actions'

// Components
import Cart from '../cart/index'

// Styles
import * as Styles from './styles'

function Header() {
	const [cartIsVisible, setCartIsVisible] = useState(false)

	const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()

	const handleCartClick = () => {
		setCartIsVisible(true)
	}

  const handleLoginClick = () => {
    dispatch(loginUser({name: 'Eduardo', email: 'teste@teste'}))
  }
  /*const handleLoginClick = () => {
    dispatch({
      // type: 'user/login' acho mais claro assim.
      type: UserActionTypes.LOGIN, 
      payload: {name: "Eduardo", email: 'eduardoandrelange@gmail.com'},
    })
  } */

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

	return (
		<Styles.Container>
			<Styles.Logo>Redux Shopping</Styles.Logo>
			<Styles.Buttons>
				{currentUser ? <div onClick={handleLogoutClick}>Sair</div> : <div onClick={handleLoginClick}>Login</div>}
				<div onClick={handleCartClick}>Carrinho</div>
			</Styles.Buttons>

			<Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
		</Styles.Container>
	)
}

export default Header
