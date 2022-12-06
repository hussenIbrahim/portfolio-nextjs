import Modal from "react-bootstrap/Modal";
import { ProjectModel } from "../body/projects/ProjectModel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
export interface MyVerticallyCenteredModalProps {
  data: ProjectModel;
  onHide: any;
}
const MyVerticallyCenteredModal: React.FC<MyVerticallyCenteredModalProps> = (
  props
) => {
  return (
    <Modal
      onExit={() => {
        console.log("onExit");
      }}
      onHide={() => {
        console.log("onHide");

        props.onHide();
      }}
      backdrop="static"
      show={props !== undefined && props !== null}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title></Modal.Title>
        <Modal.Title>{props.data.name}</Modal.Title>

        <button
          className="btn btn-danger rounded-circle border-danger"
          onClick={(event) => {
            props.onHide();
          }}
        >
          <i className="fas fa-times text-wihte "> </i>
        </button>
      </Modal.Header>
      <Modal.Body
        style={{
          overflowY: "auto",
          width: "100w",
          height: "75vh",
        }}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination]}
          spaceBetween={3}
          slidesPerView={3}
          autoplay
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {props.data.images.map((e) => {
            return (
              <SwiperSlide>
                <img
                  alt=""
                  style={{ objectFit: "contain", width: "90%" }}
                  src={e.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <h5 style={{ paddingTop: "20px" }}>Name : {props.data.name}</h5>
        <h5 style={{ paddingTop: "0px" }}>Owner : {props.data.companyName}</h5>
        <h5 style={{ paddingTop: "0px" }}>Links</h5>
        <ul>
          <li>
            Android :{" "}
            {props.data.androidLink != "" ? (
              <a href={props.data.androidLink} target="_blank">
                Open
              </a>
            ) : (
              "Not Available"
            )}
          </li>{" "}
          <li>
            IPhone :{" "}
            {props.data.iosLink != "" ? (
              <a href={props.data.iosLink} target="_blank">
                Open
              </a>
            ) : (
              "Not Available"
            )}
          </li>
        </ul>

        <h5 style={{ paddingTop: "0px" }}>Features and Detalis</h5>

        <ul>
          {props.data.description.map((l) => (
            <li>{l}</li>
          ))}{" "}
        </ul>
      </Modal.Body>
    </Modal>
  );
};
export default MyVerticallyCenteredModal;
