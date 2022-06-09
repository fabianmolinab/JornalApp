import React from 'react'

export const JournalEntry: React.FC = (props: {}) => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2020/06/01/22/23/eyes-5248678_960_720.jpg)'
        }}
      ></div>

      <div className="journal__entry-body">
        <h3 className="journal__entry-title">Un Nuevo Dia</h3>

        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quas natus officia quisquam, vero voluptate voluptates magni amet.
          Deleniti assumenda architecto iusto in itaque vitae dolor libero
          voluptas magnam cum.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday </span>
        <p>28</p>
      </div>
    </div>
  )
}
