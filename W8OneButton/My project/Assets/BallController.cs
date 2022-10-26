using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BallController : MonoBehaviour
{
    public GameObject arm;
    public Rigidbody2D ballBody;

    public SpringJoint2D sprint;
    public float releaseDistance = 0.3f;
    
    bool isDragging = false;
    bool afterDragging = false;
    bool released = false;
    Vector2 initialPos;
    
    // Start is called before the first frame update
    void Awake()
    {
        initialPos = transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.R))
        {
            SceneManager.LoadScene(0);
            return;
        }
        if (released) return;
        
        if (Input.GetMouseButtonDown(0))
        {

            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            var hit = Physics2D.Raycast(ray.origin, ray.direction);
            if (hit.collider && hit.collider.CompareTag("ball"))
            {
                isDragging = true;
            }
        }


        if (isDragging)
        {
            if (Input.GetMouseButtonUp(0))
            {
                isDragging = false;
                afterDragging = true;
                return;
            }
            
            ballBody.MovePosition(Camera.main.ScreenToWorldPoint(Input.mousePosition));
        }
        else if (afterDragging)
        {
            var distance = ((Vector2) arm.transform.position - ballBody.position).magnitude;
            if (distance <= releaseDistance)
            {
                sprint.enabled = false;
                released = true;
            }
        } 
        else
        {
            ballBody.MovePosition(initialPos);
        }
    }

    private void FixedUpdate()
    {
        
    }
}
