// implement topological sort without using a Graph class
/**
L = Empty list that will contain the sorted elements
S = Set of all nodes with no incoming edge

while S is non-empty do
    remove a node n from S
    add n to tail of L
    for each node m with an edge e from n to m do
        remove edge e from the graph
        if m has no other incoming edges then
            insert m into S

if graph has edges then
    return error   (graph has at least one cycle)
else
    return L   (a topologically sorted order)

*/

// Iterate through the prerequisites to add relations:
// node.outNodes.append(course)
// increase the "in degrees" of the course
// increase total dependencies by 1

// start from courses that have no preqreqs
// find the nodes that have zero incoming edges, and put those on a stack

//while that is not empty, pop the last element off
// for each outnode, decrease the indegrees by 1 and increase removedEdges by 1
// if hte outnode indegrees becomes 0, add it to the stack

// at the end, if # of removed edges == total dependencies, return true
// else return false
