/**
 * IErolled Interface
 * 
 * This interface defines the structure for an object that manages 
 * enrollment-related functionalities in an application. It outlines 
 * the methods that must be implemented to handle enrolled courses, 
 * including adding, removing, displaying, and retrieving enrollment data.
 */
export interface IErolled {
    enrolledCourse:() => void;
    removeEnrolledCourse:() => void;
    showEnrolledModel:() => void;
    getEnrolledData:() => void;
}