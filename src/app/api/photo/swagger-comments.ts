//schema//
/**
 * @swagger
 * components:
 *   schemas:
 *     PhotoResponse:
 *       type: object
 *       properties:
 *         location:
 *           type: string
 *           description: Location on site.
 *         imageUrl:
 *           type: string
 *           description: url of the photo
 *         imageId:
 *           type: string
 *           description: id of the photo
 *       example:
 *         location: Gallery
 *         imageUrl: https://example.com
 *         imageId: JJSHCOSDHC8437UFIJJ
 *     PhotoRequest:
 *       type: object
 *       properties:
 *         location:
 *           type: string
 *           description: Location on site.
 *         imageUrl:
 *           type: string
 *           description: url of the photo
 *         imageId:
 *           type: string
 *           description: id of the photo
 *       example:
 *         location: Gallery
 *         imageUrl: https://example.com
 *         imageId: JJSHCOSDHC8437UFIJJ
 */

//get route//
/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Test Route
 *     tags: [Test]
 *     description: Returns the hello world message to indicate that the test route works.
 *     responses:
 *       200:
 *         description: Successful response with a hello world message.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TestResponse'
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

//post route//
/**
 * @swagger
 * /api/test:
 *   post:
 *     summary: Create a new post
 *     tags: [Test]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestRequest'
 *     responses:
 *       201:
 *         description: Partner created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestResponse'
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
