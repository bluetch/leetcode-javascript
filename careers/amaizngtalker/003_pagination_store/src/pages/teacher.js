import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams, useNavigate } from "react-router-dom";
import * as apiClient from "./../utils/api";
import * as helper from "./../utils/helper";
import { anchorTeacherPrefix } from "./../utils/constant";
import { Error } from "../components/error";
import { Loading } from "../components/loading";

export const Teacher = () => {
  // TODO: focus to design teacher pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState(
    helper.getTeacherIdAnchor()
  );

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // TODO: fetch teacher pagination data
    setIsLoad(true);
    apiClient.fetchTeachers().then((teachers) => {
      const _pages = Math.ceil(teachers.length / 3);
      setTotalPage(_pages);
      console.log("pages", _pages);
      // 時間來不及做分頁，但會用 router parameter 來拆分讀取內容
      setTeachers(teachers)
      setIsLoad(false);
    })
      .catch(() => {
        console.log("error");
        setIsLoad(false);
        setError(true);
      }
      );
  }, []);

  const handleClick = (e) => {
    const teacherId = e.target.id;
    setSelectedTeacherId(Number(teacherId));
  };

  const handlePrev = () => {
    // TODO: go prev page
    setCurrentPage(prev => prev - 1);
    // navigate.push("/:page");
  };

  const handleNext = () => {
    // TODO: go next page
    setCurrentPage(prev => prev + 1);
  };

  const handleClose = () => {
    setSelectedTeacherId(0);
  };

  const seeMoreAboutThisTeacher = teachers.find(
    (teacher) => teacher.id === selectedTeacherId
  );

  // useEffect(() => {
  //   if (isLoad) return <Loading />
  // }, [isLoad]);

  // useEffect(() => {
  //   if (error) return <Error />
  // }, [error]);

  if (isLoad) return <Loading />
  if (error) return <Error />
  return (
    <div className="container">
      <h1>Teachers</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.id} | {teacher.name}
            <a
              href={`#${anchorTeacherPrefix}${teacher.id}`}
              onClick={handleClick}
              className="link"
              id={teacher.id}
            >
              see more
            </a>
          </li>
        ))}
      </ul>
      <br />
      <div className="pagination">
        目前第{currentPage}頁，共{totalPage}頁
      </div>
      <button onClick={handlePrev}>Previous Page</button>
      <button onClick={handleNext}>Next Page</button>

      {seeMoreAboutThisTeacher && (
        <div id="rightWindow">
          <h3>Teacher's information</h3>
          <hr />
          <div>ID: {seeMoreAboutThisTeacher.id}</div>
          <div>Name: {seeMoreAboutThisTeacher.name}</div>
          <br />
          <br />
          <h3>Speaking Language</h3>
          <hr />
          <div className="tagWrapper">
            {seeMoreAboutThisTeacher.speakLanguages.map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
          <br />
          <br />
          <a href="#" onClick={handleClose}>
            (close this tab)
          </a>
        </div>
      )}
    </div>
  )
}