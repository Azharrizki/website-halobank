import React from 'react'
import { clients } from "../constants";
import styles from '../style'

const Clients = () => (
  <section className={`${styles.flexCenter} mt-4 mb-10`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain hover:scale-105 ease-in-out duration-200' />
        </div>
      ))}
    </div>
  </section>
)


export default Clients