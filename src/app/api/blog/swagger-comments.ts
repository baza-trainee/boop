/**
 * @swagger
 * components:
 *   schemas:
 *     BlogPost:
 *       type: object
 *       required:
 *         - photo
 *         - titleUA
 *         - titleEN
 *         - titleIT
 *         - textUA
 *         - textEN
 *         - textIT
 *       properties:
 *         photo:
 *           type: string
 *           description: The URL of the photo
 *         titleUA:
 *           type: string
 *           description: The title in Ukrainian
 *         titleEN:
 *           type: string
 *           description: The title in English
 *         titleIT:
 *           type: string
 *           description: The title in Italian
 *         textUA:
 *           type: string
 *           description: The text in Ukrainian
 *         textEN:
 *           type: string
 *           description: The text in English
 *         textIT:
 *           type: string
 *           description: The text in Italian
 *       example:
 *         photo: "https://example.com/photo.jpg"
 *         titleUA: "Назва на українській"
 *         titleEN: "Title in English"
 *         titleIT: "Titolo in italiano"
 *         textUA: "Текст на українській мові"
 *         textEN: "Text in English"
 *         textIT: "Testo in italiano"
 */

// GET ROUTE //
/**
 * @swagger
 * /api/blog:
 *   get:
 *     summary: Get all blog posts
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: The list of blog posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BlogPost'
 *       500:
 *         description: Some server error
 */
// POST ROUTE //
/**
 * @swagger
 * /api/blog:
 *   post:
 *     summary: Create a new blog post
 *     tags: [Blog]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogPost'
 *     responses:
 *       200:
 *         description: The created blog post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BlogPost'
 *       500:
 *         description: Some server error
 */

// PATCH ROUTE //
/**
 * @swagger
 * /api/blog:
 *   patch:
 *     summary: Update a blog post
 *     tags: [Blog]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               photo:
 *                 type: string
 *               titleUA:
 *                 type: string
 *               titleEN:
 *                 type: string
 *               titleIT:
 *                 type: string
 *               textUA:
 *                 type: string
 *               textEN:
 *                 type: string
 *               textIT:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated blog post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 blogPost:
 *                   $ref: '#/components/schemas/Blog'
 *       500:
 *         description: Unable to update blog post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

// DELETE ROUTE
/**
 * @swagger
 * /api/blog:
 *   delete:
 *     summary: Delete a blog post
 *     tags: [Blog]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the blog post to delete
 *     responses:
 *       200:
 *         description: The deleted blog post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 blogPost:
 *                   $ref: '#/components/schemas/Blog'
 *       404:
 *         description: Blog post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Unable to delete blog post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
