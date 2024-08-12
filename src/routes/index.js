import AddCoursePage from "../pages/AddCoursePage";
import AddSessionPage from "../pages/AddSessionPage";
import CourseInfoPage from "../pages/CourseInfoPage";
import LoginLecturer from "../pages/LoginLecturer";
import LoginStudent from "../pages/LoginStudent";
import NotFoundPage from "../pages/NotFoundPage";
import StudentDashboard from "../pages/StudentDashboard";
import StudentSuccess from "../pages/StudentSuccess";
import DashboardLecturer from "../pages/DashboardLecturer";
import QuizPage from "../pages/QuizPage";
import DashboardStudent from "../pages/DashboardStudent";
import SessionInfoPage from "../pages/SessionInfoPage";
import StudentAccount from "../pages/StudentAccount";
import Lecturer from "../pages/Lecturer";
import ReviewCode from "../pages/ReviewCode";

export const routes = [
    {
        path: '/lecturer',
        page: LoginLecturer,
        title: 'Login Page',
        role: 'Lecturer',
        animatedBg: true,
        header: true
    },
    {
        path: '/',
        page: LoginStudent,
        title: 'Login Page',
        role: 'Student',
        animatedBg: true,
        header: true
    },
    {
        path: '*',
        page: NotFoundPage,
    },
    {
        
        path: '/dashboard',
        page: StudentDashboard,
        animatedBg: true,
        title: 'Student Dashboard',
        role: 'student',
        header: true
    },
    {
        path: '/success',
        page: StudentSuccess, // remove
    },
    {
        path: '/lecturer/home',
        page: DashboardLecturer,
    },
    {
        path: '/dashboard/:code',
        page: QuizPage,
        animatedBg: true,
        title: 'Student Dashboard',
        role: 'student',
        header: true
    },
    {
        path: '/student',
        page: DashboardStudent, // remove
        title: 'Attendance',
        role: 'student',
        header: true
    },
    {
        path: '/lecturer/dashboard',
        page: Lecturer,
        title: 'Course List',
        role: 'lecturer',
        header: true
    },
    {
        path: '/lecturer/dashboard/add-course',
        page: AddCoursePage,
        title: 'New Course',
        animatedBg: true,
        role: 'lecturer',
        header: true
    },
    {
        path: '/lecturer/dashboard/:course/add-session',
        page: AddSessionPage,
        title: 'New Attendance',
        animatedBg: true,
        role: 'lecturer',
        header: true
    },
    {
        path: '/lecturer/dashboard/:course',
        page: CourseInfoPage,
        title: 'Course Information',
        role: 'lecturer',
        header: true
    },
    {
        path: '/lecturer/dashboard/:course/:session',
        page: SessionInfoPage,
        title: 'Session Information',
        role: 'lecturer',
        header: true
    },
    {
        path: '/lecturer/dashboard/:course/:session/review',
        page: ReviewCode,
        title: 'Quiz',
        role: 'lecturer',
        header: true
    },
    {
        path: '/studentAccount',
        page: StudentAccount,
    }
]