import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function HomeContainer() {
  
  return (
    <>
      <div className='content-myth-home'>
        <div className='center-image'>
          <Card>
            <Image src='../../chaos.jpeg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Khaos</Card.Header>
              <Card.Description>
                Khaos, Yunan mitolojisinde -boş uzam, boşluk, uçurum, Kaos'un- ilk tanrı olan Khaos, Düzen'den ya da öteki adıyla Evren'den -Kosmos- önce gelmiştir.
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    </>
  )
}

export default HomeContainer