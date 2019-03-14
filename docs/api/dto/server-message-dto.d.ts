/**
 * Message object format to be sent from the server to the client
 */
interface IServerMessageDTO {
    /**
     * Message ID
     */
    id: string;
    
    /**
     * Receiver user ID
     */
    to: string;

    /**
     * Sender user ID
     */
    from: string;

    /**
     * Date/time message was submitted to the server.
     * Format is ISO-8601
     */
    created: string;

    /**
     * Message content
     */
    content: string;
}