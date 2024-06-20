/**
 * @swagger
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         location:
 *           type: string
 *         imageUrl:
 *           type: string
 *         imageId:
 *           type: string
 *         sourceLink:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         titleUA:
 *           type: string
 *         textUA:
 *           type: string
 *         titleEN:
 *           type: string
 *         textEN:
 *           type: string
 *         titleIT:
 *           type: string
 *         textIT:
 *           type: string
 */

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Get all news articles.
 *     tags: [News]
 *     responses:
 *       200:
 *         description: A list of news articles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 *       500:
 *         description: Internal Server Error.
 *   post:
 *     summary: Create a new news article.
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       200:
 *         description: Successfully created news article.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       500:
 *         description: Internal Server Error.
 * /news/{id}:
 *   patch:
 *     summary: Update a news article by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the news article to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewsFormData'
 *     responses:
 *       '200':
 *         description: News article successfully updated
 *       '400':
 *         description: Invalid request or missing ID
 *       '500':
 *         description: Internal server error
 *
 *   delete:
 *     summary: Delete a news article by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the news article to delete
 *     responses:
 *       '200':
 *         description: News article successfully deleted
 *       '400':
 *         description: Invalid request or missing ID
 *       '500':
 *         description: Internal server error
 */
