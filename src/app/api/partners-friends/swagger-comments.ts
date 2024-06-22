/**
 * @swagger
 * components:
 *   schemas:
 *     PartnersFriends:
 *       type: object
 *       required:
 *         - logoUrl
 *         - link
 *         - section
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the partner or friend.
 *         logoUrl:
 *           type: string
 *           description: The URL of the partner or friend's logo.
 *         link:
 *           type: string
 *           description: The URL link to the partner or friend's website.
 *         section:
 *           type: string
 *           description: The section where the partner or friend belongs (either 'friends' or 'partners').
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the partner or friend was created.
 */

/**
 * @swagger
 * /api/partners-friends:
 *   get:
 *     summary: Retrieve a list of partners and friends
 *     tags: [PartnersFriends]
 *     responses:
 *       200:
 *         description: A list of partners and friends.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PartnersFriends'
 *       400:
 *         description: No partners or friends found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/partners-friends:
 *   post:
 *     summary: Create a new partner or friend
 *     tags: [PartnersFriends]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PartnersFriendsFormData'
 *     responses:
 *       200:
 *         description: The partner or friend was successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PartnersFriends'
 *       400:
 *         description: All fields are required or Section must be either "friends" or "partners".
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/partners-friends/{id}:
 *   patch:
 *     summary: Update a partner or friend's details
 *     tags: [PartnersFriends]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the partner or friend to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PartnersFriendsFormData'
 *     responses:
 *       200:
 *         description: The partner or friend's details were successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PartnersFriends'
 *       400:
 *         description: Params id is required or Request body is required or Section must be either "friends" or "partners".
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/partners-friends/{id}:
 *   delete:
 *     summary: Delete a partner or friend
 *     tags: [PartnersFriends]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the partner or friend to delete
 *     responses:
 *       200:
 *         description: The partner or friend was successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PartnersFriends'
 *       400:
 *         description: ID is required.
 *       404:
 *         description: Record not found.
 *       500:
 *         description: Internal Server Error.
 */
