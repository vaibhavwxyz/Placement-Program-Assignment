function isSameTree(inorder, preorder, postorder) {
  if (inorder.length === 0 || preorder.length === 0 || postorder.length === 0) {
    return true;
  }

  if (
    inorder.length !== preorder.length ||
    preorder.length !== postorder.length
  ) {
    return false;
  }

  const root = preorder[0];
  const rootIndex = inorder.indexOf(root);

  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPreorder = preorder.slice(1, rootIndex + 1);
  const rightPreorder = preorder.slice(rootIndex + 1);

  const leftPostorder = postorder.slice(0, rootIndex);
  const rightPostorder = postorder.slice(rootIndex, postorder.length - 1);

  return (
    isSameTree(leftInorder, leftPreorder, leftPostorder) &&
    isSameTree(rightInorder, rightPreorder, rightPostorder)
  );
}
