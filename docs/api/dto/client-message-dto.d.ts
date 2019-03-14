/**
 * Message object format to be sent from the client to the server
 */
interface IClientMessageDTO {
    /**
     * Receiver user ID
     */
    to: string;

    /**
     * Message content
     */
    content: string;
}