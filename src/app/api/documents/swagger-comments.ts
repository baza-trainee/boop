//schema//
/**
 * @swagger
 * components:
 *   schemas:
 *     DocumentsResponse:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         documentUrl:
 *           type: string
 *         documentId:
 *           type: string
 *       example:
 *         title: Example
 *         documentUrl: https://example.com
 *         documentId: JJSHCOSDHC8437UFIJJ
 *     DocumentsRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the document.
 *         documentUrl:
 *           type: string
 *           description: url of the document
 *         documentId:
 *           type: string
 *           description: id of the document
 *       example:
 *         title: Example
 *         documentUrl: https://example.com
 *         documentId: JJSHCOSDHC8437UFIJJ
 */

//get route//
/**
 * @swagger
 * /api/documents:
 *   get:
 *     summary: Get All Documents
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DocumentsResponse'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cannot fetch
 */

//patch route//
/**
 * @swagger
 * /api/documents/{id}:
 *   patch:
 *     summary: Edit Document
 *     tags: [Documents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the document
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DocumentsRequest'
 *     responses:
 *       201:
 *         description: Document updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DocumentsResponse'
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
