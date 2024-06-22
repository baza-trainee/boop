//schema//
/**
 * @swagger
 * components:
 *   schemas:
 *     PhotoResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         location:
 *           type: string
 *           description: Location on site.
 *         imageUrl:
 *           type: string
 *           description: url of the photo
 *         imageId:
 *           type: string
 *           description: id of the photo on Cloudinary
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
 * /api/photo:
 *   get:
 *     summary: Get All Photo
 *     tags: [Photo]
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PhotoResponse'
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
 * /api/photo:
 *   post:
 *     summary: Add new Photo
 *     tags: [Photo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PhotoRequest'
 *     responses:
 *       201:
 *         description: Photo added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PhotoResponse'
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

//patch route//
/**
 * @swagger
 * /api/photo/{id}:
 *   patch:
 *     summary: Edit Photo
 *     tags: [Photo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the photo
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PhotoRequest'
 *     responses:
 *       201:
 *         description: Photo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PhotoResponse'
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

//delete route//
/**
 * @swagger
 * /api/photo/{id}:
 *   delete:
 *     summary: Delete Photo
 *     tags: [Photo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the photo
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Photo deleted successfully
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
