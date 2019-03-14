/**
 * User information
 */
interface IUserDTO {
    /**
     * Unique user ID
     */
    id: string;

    /**
     * Name of the user
     */
    name: string;
    
    /**
     * User email
     */
    email: string;

    /**
     * Denotes if the user is enabled
     */
    enabled: boolean;

    /**
     * The privileges level of the user
     */
    type: "user" | "admin";
}