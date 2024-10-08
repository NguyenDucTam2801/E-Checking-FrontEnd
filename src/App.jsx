import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import HeaderComponent from "./components/HeaderComponent";
import GradientBackground from "./components/GradientBackground";
import { Fragment, useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import FooterComponent from "./components/FooterComponent";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "./redux/slices/studentSlice";
import { updateLecturer } from "./redux/slices/lecturerSlice";
import * as StudentService from "./services/StudentService";
import * as LecturerService from "./services/LecturerService";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { jwtDecode } from 'jwt-decode';
import { isJsonString } from "./utils";

export default function App() {
  const dispatch = useDispatch()
  const queryClient = new QueryClient()
  const [isLoading, setIsLoading] = useState(false)
  const student = useSelector(state => state.student)
  const lecturer = useSelector(state => state.lecturer)

  const fetchStudentData = async (id, token) => {
    try {
      const resStudent = await StudentService.getDetailStudent(id, token)
      dispatch(updateStudent({ ...resStudent?.data, accessToken: token }))
      // console.log(resStudent?.data)
    } catch (error) {
      // console.log(error)
    }
  }

  const fetchLecturerData = async (id, token) => {
    try {
      const resLecturer = await LecturerService.getDetailLecturer(id, token)
      dispatch(updateLecturer({ ...resLecturer?.data, accessToken: token }))
    } catch (error) {
      // console.log(error)
    }
  }

  const AuthWrapper = ({ children, title }) => {
    const { isAuthenticated, isLoading } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (title !== 'Login Page') {
        if (!isAuthenticated && !localStorage.getItem('accessToken')) {
          navigate('/')
        }
      }
    }, [isAuthenticated, isLoading, navigate, title]);

    return children;
  };

  useEffect(() => {
    setIsLoading(true)
    if (localStorage.getItem('role')) {
      if (localStorage.getItem('role') === 'student') {
        let storageData = localStorage.getItem('accessToken')
        if (storageData && isJsonString(storageData)) {
          storageData = JSON.parse(storageData)
          const decoded = jwtDecode(storageData);
          if (decoded?.id) {
            // console.log('decoded', decoded)
            fetchStudentData(decoded?.id, storageData);
          }
        }
      } else if (localStorage.getItem('role') === 'lecturer') {
        let storageData = localStorage.getItem('accessToken')
        if (storageData && isJsonString(storageData)) {
          storageData = JSON.parse(storageData)
          const decoded = jwtDecode(storageData);
          if (decoded?.id) {
            // console.log('decoded', decoded)
            fetchLecturerData(decoded?.id, storageData);
          }
        }
      }
    }

    setIsLoading(false)
  })


  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <NextUIProvider>
          <Router>
            <Routes>
              {routes.map((route) => {
                const Page = route.page;
                const Background = route.animatedBg ? GradientBackground : Fragment;
                return (
                  <Route key={route.path} path={route.path} element={
                    <AuthWrapper title={route.title}>
                      <Helmet>
                        <title>{route.title}</title>
                      </Helmet>
                      <div className="flex flex-col w-full h-svh">
                        {route.header && <HeaderComponent title={route.title} role={route.role} />}
                        <Background>
                          <Page />
                        </Background>
                        <FooterComponent />
                      </div>
                    </AuthWrapper>
                  } />
                )
              })}
            </Routes>
          </Router>
        </NextUIProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}