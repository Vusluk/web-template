import React from 'react'
import style from './index.css'

import { TASK_TYPES } from 'constants'

import Input from 'components/Input'
import Button from 'components/Button'

const Header = ({
  app = {},
  actions = {},

  user = {},
  form = {},
}) => {
  return (
    <header className={style.root}>
      <div className={style.logo}>
        <h1>Тестовое задание по английскому</h1>
      </div>
      <div className={style.account}>

        {user.token &&
          <div className={style.auth}>
            <div className={style.email}>
              <span>{user.email}</span>
              <Button {...{
                value: 'Выйти',
                onClick: () => actions.singOut(),
              }} />
            </div>
            <div className={style.statistic}>
              {TASK_TYPES.map((t, i) => (
                <div className={style.part} key={i}>
                  <span>{t.name}:</span>
                  <span>
                    <span>{user.statistic[t.value].success}</span>
                    /
                    <span>{user.statistic[t.value].failure}</span>
                  </span>
                </div>
              ))}
              <div className={style.part}>
                <span>Всего:</span>
                  <span>
                    <span>{user.statistic.success}</span>
                    /
                    <span>{user.statistic.failure}</span>
                  </span>
              </div>
            </div>
          </div>
        }

        {!user.token &&
          <div className={style.noAuth}>
            <Input {...{
              type: 'email',
              label: 'E-Mail',
              value: (form.auth || {}).email,
              onChange: (value) => actions.formChange(['auth', 'email'], value),
            }} />
            <Input {...{
              type: 'password',
              label: 'Пароль',
              value: (form.auth || {}).pass,
              onChange: (value) => actions.formChange(['auth', 'pass'], value),
            }} />
            <div className={style.buttons}>
              <Button {...{
                value: 'Регистрация',
                onClick: () => actions.singUp(),
                className: style.button,
              }} />
              <Button {...{
                value: 'Войти',
                onClick: () => actions.singIn(),
                className: style.button,
              }} />
            </div>
          </div>
        }
      </div>
    </header>
  )
}

export default Header
