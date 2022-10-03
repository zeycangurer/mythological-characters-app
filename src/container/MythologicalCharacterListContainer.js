import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';
import { Button, Header, Card, Image, Modal } from 'semantic-ui-react'
import { Link} from 'react-router-dom';


function MythologicalCharacterListContainer() {
  const { charData } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [filteredChar, setFilteredChar] = useState([]);

  const handleClickToOpen = (charItem) => {
    setFilteredChar([charItem])
    setOpen(true)
  }

  return (
    <>
      <Card.Group centered >
        {charData && charData.map((god) =>
          <Card
            className='card-myth'
            color='olive'
            key={god.ID}
          >
            <Image src={god.images ? god.images : 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{god.name}</Card.Header>
              <div className='myth-meta'>
                <ul>
                  <li><Card.Meta>{god.greekName}</Card.Meta></li>
                  <li><Card.Meta>{god.romanName}</Card.Meta></li>
                </ul>
              </div>
              <Card.Description>
                <Link
                  to={`?id=${god.ID}`}
                  onClick={() => handleClickToOpen(god)}
                >
                  Karakter hakkında bilgi almak için tıklayın.
                </Link>
              </Card.Description>
            </Card.Content>
          </Card>
        )}
      </Card.Group>


      {filteredChar && filteredChar.map((god) =>
        <Modal className='myth-modal' key={god.ID} open={open} >
          <Modal.Header >{god.category} {god.name}</Modal.Header>
          <Modal.Content image scrolling>
            <Image size='medium' src={god.images ? god.images : 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'} wrapped />
            <Modal.Description className='myth-modal-description'>
              <Header>{god.name}</Header>
              <p>Yunan Mitolojisindeki Adı: <span>{god.greekName}</span></p>
              <p>Roma Mitolojisindeki Adı: <span>{god.romanName}</span></p>
              <p>Annesi: <span>{god.mother}</span></p>
              <p>Babası: <span>{god.father}</span></p>
              <p><span>{god.description}</span></p>
              <p>Eş/leri : </p>
              <ul>{god.spouses && god.spouses.map((spouse,index) => 
                <li key={index}>{spouse}</li>
              )}</ul>
              <p>Sevgili/leri: </p>
              <ul>{god.lovers && god.lovers.map((lover,index) => 
                <li key={index}>{lover}</li>
              )}</ul>
              <p>Çocuk/ları:</p>
              <ul>{god.children && god.children.map((child,index) => 
                <li key={index}>{child}</li>
              )}</ul>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
              Kapat
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </>
  )
}
export default MythologicalCharacterListContainer