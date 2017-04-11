import { Delay } from './delay';
import { ICourse } from '../models/course';


const courses: ICourse[] = [
    {
        id: "react-flux-building-applications",
        title: "Building Applications in React and Flux",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "5:08",
        category: "JavaScript"
    },
    {
        id: "clean-code",
        title: "Clean Code: Writing Code for Humans",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "cory-house",
        length: "3:10",
        category: "Software Practices"
    },
    {
        id: "architecture",
        title: "Architecting Applications for the Real World",
        watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
        authorId: "cory-house",
        length: "2:52",
        category: "Software Architecture"
    },
    {
        id: "career-reboot-for-developer-mind",
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
        authorId: "cory-house",
        length: "2:30",
        category: "Career"
    },
    {
        id: "web-components-shadow-dom",
        title: "Web Component Fundamentals",
        watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
        authorId: "cory-house",
        length: "5:10",
        category: "HTML5"
    }
];

function replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course: ICourse) => {
    return replaceAll(course.title, ' ', '-');
};

export class CourseApi {
    static async getAllCourses() {
        await new Promise(resolve => setTimeout(resolve, Delay));

        return courses;
    }

    static async saveCourse(course: ICourse) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.

        await new Promise(resolve => setTimeout(resolve, Delay));
        
        const minCourseTitleLength = 1;

        if (course.title.length < minCourseTitleLength) {
            throw (`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
            const existingCourseIndex = courses.findIndex(c => c.id === course.id);
            courses.splice(existingCourseIndex, 1, course);
        } else {
            course.id == generateId(course);
            course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
            courses.push(course);
        }
    }

    static async deleteCourse(courseId: string) {
        await new Promise(resolve => setTimeout(resolve, Delay));

        const indexOfCourseToDelete = courses.findIndex(c => c.id === courseId);
        courses.splice(indexOfCourseToDelete, 1);
    }
}
