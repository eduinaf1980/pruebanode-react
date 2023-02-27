import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import pdf from '../../assets/images/pdf.png';
import DocPdf from '../pdf/DocPdf';
import { PDFDownloadLink } from "@react-pdf/renderer"


export const ComponentActions = (props) => {

  return (
    <>
      <Row className='align-items-center'>
        <Col md={4}>
          <span className='h4 mr-4'>
            {props.title}
          </span>
          <Link
            className='btn btn-success waves-effect waves-light btn-rounded w-btn'
            to={props.to}
            role='button'
          >
            Añadir
          </Link>
        </Col>
        {(props.pdf === 'true') &&
          <Col md={8}>
            <div className="d-flex justify-content-end">
              <PDFDownloadLink
                document={<DocPdf />}
                fileName="items.pdf"
              >
                <button
                //onClick={() => generateItemsPdf()}
                >
                  <img
                    src={pdf}
                    alt=""
                    className="img-fluid d-block"
                    width={50}
                    height={50}
                  />
                </button>
              </PDFDownloadLink>
            </div>
          </Col>
        }
      </Row>
      <hr className={`mb-5 lw ${props.color || 'text-primary'}`} />
    </>
  )
}
