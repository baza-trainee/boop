/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Test Route
 *     description: Returns the hello world message to indicate that the test route works.
 *     responses:
 *       200:
 *         description: Successful response with a hello world message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Test route works!!!🎈🎈🎈
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
