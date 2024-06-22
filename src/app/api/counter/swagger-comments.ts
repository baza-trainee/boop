/**
 * @swagger
 * definitions:
 *   CounterItem:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       number:
 *         type: integer
 *       text:
 *         type: string
 *       variant:
 *         type: string
 *       order:
 *         type: integer
 *     required:
 *       - id
 *       - number
 *       - text
 *       - variant
 *       - order
 */

/**
 * @swagger
 * /api/counter:
 *   get:
 *     summary: Retrieve all counter items.
 *     tags:
 *       - CounterItem
 *     responses:
 *       200:
 *         description: Successfully retrieved counter items.
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/CounterItem'
 *       500:
 *         description: Internal Server Error.
 *   post:
 *     summary: Create a new counter item.
 *     tags:
 *       - CounterItem
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CounterItem'
 *     responses:
 *       201:
 *         description: Successfully created counter item.
 *         schema:
 *           $ref: '#/definitions/CounterItem'
 *       400:
 *         description: |
 *           Invalid request: Invalid body format.
 *       500:
 *         description: Internal Server Error.
 *
 * /api/counter/{id}:
 *   put:
 *     summary: Update a specific counter item by ID.
 *     tags:
 *       - CounterItem
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID of the counter item to update.
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CounterItem'
 *     responses:
 *       200:
 *         description: Successfully updated counter item.
 *         schema:
 *           $ref: '#/definitions/CounterItem'
 *       400:
 *         description: |
 *           Invalid request: Missing id parameter or invalid body fields.
 *       404:
 *         description: |
 *           Counter item not found.
 *       500:
 *         description: Internal Server Error.
 *   delete:
 *     summary: Delete a specific counter item by ID.
 *     tags:
 *       - CounterItem
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID of the counter item to delete.
 *     responses:
 *       204:
 *         description: Successfully deleted counter item.
 *       404:
 *         description: |
 *           Counter item not found.
 *       500:
 *         description: Internal Server Error.
 */
