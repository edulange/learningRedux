prop drilling = quando tu ta só passando um estado para um outro componente sem utilizao.

por exemplo "App -> Main -> Message'
o Main só estaria passando o state.

---

reducer é onde a gente guarda o state global (então é o store? )
a gente pode usar um hook chamado useSelector, acessando o estado de qualquer lugar(componente)

para _ACESSAR_ o estado é _useSelector_
para _ALTERAR_ o estado é _useDispatch_ através de _ACTIONS_

e as _ACTIONS_ = Objeto.
toda action tem duas propriedades:
{ type:
payload: }

o type vai representar a natureza da action

exemplo:
userReducer
monitora/'escuta' a action _users/login_
quando o usuário dispachar o userReducer vai pegar o payload e colocar dentro do state.

https://youtu.be/mXI2-gjIZ40?si=t8ATjVIkVoy8rQf1&t=1991
