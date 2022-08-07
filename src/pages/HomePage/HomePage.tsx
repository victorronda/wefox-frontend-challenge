import React, { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { responseErrorMessage } from "../../api/constants";
import { getAllPosts, getPost } from "../../api/Post";
import { ResponseErrorMessage } from "../../api/Post.types";
import { ICity } from "../../components/Cities/Cities.types";
import CitiesList from "../../components/Cities/CitiesList/CitiesList";
import CityDetails from "../../components/Cities/CityDetails/CityDetails";
import MainTitle from "../../components/MainTitle/MainTitle";

const HomePage = () => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedCity, setSelectedCity] = useState<ICity>(
    {} as unknown as ICity
  );
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState<ResponseErrorMessage | void>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      const allCities = await getAllPosts();
      if (JSON.stringify(allCities) === JSON.stringify(responseErrorMessage)) {
        setError(allCities as ResponseErrorMessage);
        return;
      }
      setCities(allCities as ICity[]);
      setIsLoading(false);
    };

    fetchCities();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = async (id: number) => {
    setIsLoading(true);
    const city = await getPost(id);
    if (JSON.stringify(city) === JSON.stringify(responseErrorMessage)) {
      setError(city as ResponseErrorMessage);
      return;
    }
    setSelectedCity(city as ICity);
    setIsLoading(false);
    setShow(true);
  };

  return (
    <div>
      <MainTitle />
      {!isLoading ? (
        <CitiesList cities={cities} onClick={handleShow} />
      ) : (
        <Spinner animation="grow" variant="primary"/>
      )}
      {!isLoading ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCity.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CityDetails selectedCity={selectedCity} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Spinner animation="grow" variant="primary" />
      )}
    </div>
  );
};

export default HomePage;
