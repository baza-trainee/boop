/**
 * @swagger
 * components:
 *   schemas:
 *     BlogFormData:
 *       type: object
 *       properties:
 *         location:
 *           type: string
 *         imageUrl:
 *           type: string
 *         imageId:
 *           type: string
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
 *
 * /blog:
 *   get:
 *     tags: [BLOG]
 *     summary: Retrieve a list of blog posts
 *     responses:
 *       '200':
 *         description: A list of blog posts
 *       '400':
 *         description: Posts not found
 *       '500':
 *         description: Internal server error
 *   post:
 *     tags: [BLOG]
 *     summary: Create a new blog post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogFormData'
 *     responses:
 *       '200':
 *         description: Blog post created successfully
 *       '500':
 *         description: Internal server error
 *
 * /blog/{id}:
 *   patch:
 *     tags: [BLOG]
 *     summary: Update an existing blog post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the blog post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogFormData'
 *     responses:
 *       '200':
 *         description: Blog post updated successfully
 *       '400':
 *         description: Invalid request or missing ID
 *       '500':
 *         description: Internal server error
 *   delete:
 *     tags: [BLOG]
 *     summary: Delete an existing blog post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the blog post to delete
 *     responses:
 *       '200':
 *         description: Blog post deleted successfully
 *       '500':
 *         description: Internal server error
 */
